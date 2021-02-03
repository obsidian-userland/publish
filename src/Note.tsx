import ReactMarkdown from "react-markdown";
import { useState } from "react";
import qs from 'query-string'
import { Box, Flex, Link, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation, useHistory } from 'react-router-dom'
import { ObsidianConfig } from ".";
import ps from 'promise.series'
import { wikiLinkPlugin } from 'remark-wiki-link';

export type Note = {
  pageId: string;
  content: string;
};

function NotePage(props: {
  initialNotes: Array<Note>,
  config: ObsidianConfig
}) {

  const [noteStack, setNoteStack] = useState(props.initialNotes || []);

  const location = useLocation()
  const history = useHistory()

  async function fetchNote(noteId: string) {
    const md = await fetch(`${props.config.base}${noteId}.md`).then(res => res.text())
    return {
      content: md,
      pageId: noteId
    }
  }

  React.useEffect(() => {
    history.push({
      pathname: location.pathname,
      search: `?${noteStack.map(note => note.pageId).map(id => `id=${id}`).join('&')}`
    })
  }, [noteStack])

  async function init() {
    const query = qs.parse(location.search) as {
      id?: string | string[]
    }

    if (query.id) {
      if (Array.isArray(query.id)) {
        const task = query.id.map(id => {
          return async (notes) => {
            const note = await fetchNote(id)
            return [
              ...notes,
              note
            ]
          }
        })

        const notes = await ps(task, noteStack)
        setNoteStack(notes)
      } else {
        const note = await fetchNote(query.id)
        setNoteStack([ note ])
      }
    } else {
      // get default md
      const note = await fetchNote(props.config.mainPage!)
      setNoteStack([note])
    }
  }

  React.useEffect(() => {
    init()
  }, [])

  return (
    <>
      <Flex flex="1">
        <Flex>
          {noteStack.map((note, index) => {
            async function openNote(noteId) {
              const res = await fetch(`${props.config.base}/${noteId}.md`);
              const md = await res.text();

              if (md) {
                const newNoteStack = noteStack.slice(0, index + 1);

                newNoteStack[index + 1] = {
                  pageId: noteId,
                  content: md
                };
                setNoteStack(newNoteStack);
              }
            }

            return (
              <Box key={note.pageId} overflow="scroll" width="xl" borderRight="1px" borderColor="gray.100" p={8} >
                <ReactMarkdown
                  plugins={[
                    [wikiLinkPlugin, {
                      aliasDivider: '|'
                    }]
                  ]}
                  className={props.config.noteClassName}
                  key={note.pageId}
                  renderers={{
                    "list": ({ children }) => {
                      return (
                        <UnorderedList>
                          {children}
                        </UnorderedList>
                      )
                    },
                    listItem: ({ children }) => {
                      return (
                        <ListItem>{children}</ListItem>
                      )
                    },
                    paragraph: ({ children }) => {
                      return <Text>{children}</Text>
                    },
                    wikiLink: ({ value, data: { permalink, alias, hProperties: { className, href } } }) => {
                      return (
                        // <Link href={href}>
                          <Link
                            textDecoration="underline"
                            href={href}
                            onClick={(e) => {
                              e.preventDefault();
                              const noteId = value
                              openNote(noteId);
                            }}
                          >
                            {value}
                          </Link>
                        // </Link>
                      );
                    },
                  }}
                >
                  {note.content}
                </ReactMarkdown>
              </Box>
            );
          })}
        </Flex>

      </Flex>
    </>
  );
}

export default NotePage;