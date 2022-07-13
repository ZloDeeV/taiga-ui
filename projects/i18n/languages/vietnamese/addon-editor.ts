import {TuiLanguageEditor} from '@taiga-ui/i18n/interfaces';

export const TUI_VIETNAMESE_LANGUAGE_ADDON_EDITOR: TuiLanguageEditor = {
    colorSelectorModeNames: ['Màu thuần', 'Màu chuyển sắc'],
    toolbarTools: {
        undo: 'Hoàn tác',
        redo: 'Làm lại',
        font: 'Phông chữ',
        fontStyle: 'Kiểu chữ',
        fontSize: 'Cỡ chữ',
        bold: 'In đậm',
        italic: 'In nghiêng',
        underline: 'Gạch chân',
        strikeThrough: 'Gạch ngang',
        justify: 'Canh lề',
        justifyLeft: 'Canh trái',
        justifyCenter: 'Canh giữa',
        justifyRight: 'Canh phải',
        justifyFull: 'Canh đều',
        list: 'Danh sách',
        indent: 'Thụt vào',
        outdent: 'Thụt ra',
        unorderedList: 'Danh sách không đánh số',
        orderedList: 'Danh sách được đánh số',
        quote: 'Trích dẫn',
        foreColor: 'Màu',
        backColor: 'Màu nền',
        hiliteColor: 'Màu đánh dấu',
        clear: 'Xóa',
        link: 'Liên kết',
        attach: 'Tệp đính kèm',
        tex: 'Chèn TeX',
        code: 'Đoạn mã',
        image: 'Chèn hình',
        insertHorizontalRule: 'Chèn thước ngang',
        superscript: 'Chỉ số trên',
        subscript: 'Chỉ số dưới',
        insertTable: 'Chèn bảng',
        mergeCells: 'Hợp nhất ô',
        splitCells: 'Tách ô',
        rowsColumnsManaging: 'Quản lý hàng và cột',
        cellColor: 'Màu ô',
        setDetails: 'Chi tiết',
        removeDetails: 'Hủy chi tiết',
    },
    editorTableCommands: [
        ['Chèn cột trước', 'Chèn cột sau'],
        ['Chèn hàng trước', 'Chèn hàng sau'],
        ['Xóa cột', 'Xóa hàng'],
    ],
    editorCodeOptions: ['Mã trong dòng', 'Mã trong khối'],
    editorFontOptions: {
        normal: 'Thường',
        title: 'Tiêu đề',
        subtitle: 'Phụ đề',
    },
};
