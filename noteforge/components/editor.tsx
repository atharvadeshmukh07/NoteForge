'use client';

import { useBlockNote, BlockNoteView } from '@blocknote/react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import '@blocknote/core/style.css';

// Define the BlockNoteEditor type based on your knowledge of the structure
type BlockNoteEditor = {
  topLevelBlocks: any[];
  isEditable: boolean;
};

type EditorProps = {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor: BlockNoteEditor | undefined = useBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange: (editor: BlockNoteEditor) => {
      if (!editable) return;
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
  });

  useEffect(() => {
    if (editor) {
      editor.isEditable = editable ?? true;
    }
  }, [editor, editable]);

  return (
    <div>
      <BlockNoteView
        editor={editor}
        editable={editable ?? true}
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  );
};

export default Editor;
