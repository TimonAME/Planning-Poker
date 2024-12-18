<template>
    <div>
        <section
            v-if="editor"
            class="buttons text-gray-700 flex items-center flex-wrap gap-x-4 border-t border-l border-r border-gray-400 p-4"
        >
            <button
                type="button"
                @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'bg-gray-200 rounded': editor.isActive('bold') }"
                class="p-1"
            >
                <BoldIcon title="Bold" />
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'bg-gray-200 rounded': editor.isActive('italic') }"
                class="p-1"
            >
                <ItalicIcon title="Italic" />
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleUnderline().run()"
                :class="{ 'bg-gray-200 rounded': editor.isActive('underline') }"
                class="p-1"
            >
                <UnderlineIcon title="Underline" />
            </button>
            <button
                type="button"
                @click="
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                "
                :class="{
                    'bg-gray-200 rounded': editor.isActive('heading', {
                        level: 1,
                    }),
                }"
                class="p-1"
            >
                <H1Icon title="H1" />
            </button>
            <button
                type="button"
                @click="
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                "
                :class="{
                    'bg-gray-200 rounded': editor.isActive('heading', {
                        level: 2,
                    }),
                }"
                class="p-1"
            >
                <H2Icon title="H2" />
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{
                    'bg-gray-200 rounded': editor.isActive('bulletList'),
                }"
                class="p-1"
            >
                <ListIcon title="Bullet List" />
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{
                    'bg-gray-200 rounded': editor.isActive('orderedList'),
                }"
                class="p-1"
            >
                <OrderedListIcon title="Ordered List" />
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{
                    'bg-gray-200 rounded': editor.isActive('blockquote'),
                }"
                class="p-1"
            >
                <BlockquoteIcon title="Blockquote" />
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleCode().run()"
                :class="{ 'bg-gray-200 rounded': editor.isActive('code') }"
                class="p-1"
            >
                <CodeIcon title="Code" />
            </button>
            <button
                type="button"
                @click="editor.chain().focus().setHorizontalRule().run()"
                class="p-1"
            >
                <HorizontalRuleIcon title="Horizontal Rule" />
            </button>
            <button
                type="button"
                class="p-1 disabled:text-gray-400"
                @click="editor.chain().focus().undo().run()"
                :disabled="!editor.can().chain().focus().undo().run()"
            >
                <UndoIcon title="Undo" />
            </button>
            <button
                type="button"
                @click="editor.chain().focus().redo().run()"
                :disabled="!editor.can().chain().focus().redo().run()"
                class="p-1 disabled:text-gray-400"
            >
                <RedoIcon title="Redo" />
            </button>
        </section>
        <EditorContent :editor="editor" />
    </div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import BoldIcon from "vue-material-design-icons/FormatBold.vue";
import ItalicIcon from "vue-material-design-icons/FormatItalic.vue";
import UnderlineIcon from "vue-material-design-icons/FormatUnderline.vue";
import H1Icon from "vue-material-design-icons/FormatHeader1.vue";
import H2Icon from "vue-material-design-icons/FormatHeader2.vue";
import ListIcon from "vue-material-design-icons/FormatListBulleted.vue";
import OrderedListIcon from "vue-material-design-icons/FormatListNumbered.vue";
import BlockquoteIcon from "vue-material-design-icons/FormatQuoteClose.vue";
import CodeIcon from "vue-material-design-icons/CodeTags.vue";
import HorizontalRuleIcon from "vue-material-design-icons/Minus.vue";
import UndoIcon from "vue-material-design-icons/Undo.vue";
import RedoIcon from "vue-material-design-icons/Redo.vue";

const content = ref("");

const props = defineProps({
    resetTrigger: Boolean,
    existingDescription: String,
});

const existingDescription = props.existingDescription;

const emit = defineEmits(["update:content"]);
const editor = useEditor({
    content: content.value,
    onUpdate: ({ editor }) => {
        //console.log(editor)
        const html = editor.getHTML();
        emit("update:content", html); // Emit the current HTML content
    },
    extensions: [StarterKit, Underline],
    editorProps: {
        attributes: {
            class: "prose max-w-none outline-none overflow-y-auto min-h-[12rem] max-h-[12rem] border p-4 border-gray-400",
        },
    },
});

onMounted(() => {
    if (existingDescription) {
        editor.value.commands.setContent(existingDescription);
    }
});

watch(
    () => props.resetTrigger,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            editor.value.commands.clearContent();
        }
    },
);
</script>

<style lang="scss">
/* Basic editor styles */
.tiptap {
    > * + * {
        margin-top: 0.75em;
    }

    ul,
    ol {
        padding: 0 1rem;
    }
}
</style>
