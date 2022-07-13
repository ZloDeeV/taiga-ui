import {TuiLanguageEditor} from '@taiga-ui/i18n/interfaces';

export const TUI_TURKISH_LANGUAGE_ADDON_EDITOR: TuiLanguageEditor = {
    colorSelectorModeNames: ['Solid color', 'Gradient'],
    toolbarTools: {
        undo: 'Geri al',
        redo: 'İleri Al',
        font: 'Yazı Tipi',
        fontStyle: 'Yazı stili',
        fontSize: 'Yatı Boyutu',
        bold: 'Kalın',
        italic: 'İtalik',
        underline: 'Altı Çizi',
        strikeThrough: 'Üstü Çizili',
        justify: 'Hizala',
        justifyLeft: 'Sola yasla',
        justifyCenter: 'Ortala',
        justifyRight: 'Sağa yasla',
        justifyFull: 'Doldur',
        list: 'Liste',
        indent: 'Girinti',
        outdent: 'Çıkıntı',
        unorderedList: 'Noktalı liste',
        orderedList: 'Numerik liste',
        quote: 'Alıntı',
        foreColor: 'Renk',
        backColor: 'Arka plan rengi',
        hiliteColor: 'hiliteColor',
        clear: 'Formatı Temizle',
        link: 'Link',
        attach: 'Dosya Ekle',
        tex: 'TeX Ekle',
        code: 'Kod',
        image: 'Resim Ekle',
        insertHorizontalRule: 'Satır Ekle',
        superscript: 'Üst Simge',
        subscript: 'Alt Simge',
        insertTable: 'Insert table',
        mergeCells: 'Merge cells',
        splitCells: 'Split cells',
        rowsColumnsManaging: 'Managing rows and columns',
        cellColor: 'Cell color',
        setDetails: 'Details',
        removeDetails: 'Remove details',
    },
    editorTableCommands: [
        ['Insert column before', 'Insert column after'],
        ['Insert row before', 'Insert row after'],
        ['Delete column', 'Delete row'],
    ],
    editorCodeOptions: ['Code in the text', 'Code in block'],
    editorFontOptions: {
        normal: 'Normal',
        title: 'Title',
        subtitle: 'Subtitle',
    },
};
