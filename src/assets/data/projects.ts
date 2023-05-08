const data = [
    {
        label: 'Recent Project: RADIUS',
        icon: 'fa-solid fa-star',
        expanded: true,
        description: 'Packaging MIS Application for large scale customers',
        technology: ['Angular (10-13)', 'HTML', 'SCSS', 'PrimeNG', 'NG Material', 'ChartJS', 'ng2-PdfViewer'],
        responsibilty: 'Sole in-charge of UI Project for initial 3 years, later trained and managed team of 10 UI developers on same project',
        detail: [
            'Restructured whole UI codebase to match latest standards and utilize Angular provided features',
            'Made around 100+ robust and dynamic reusable components',
            'Landing Grid component (sort, filter, elastic filter, inline edit, pinning, reordering, resizing, saving state in view, column selection, compact and spacious mode, full screen mode, custom template on row expand insights panel, export records, pagination, custom template support in columns, datatype support for formatting in columns) being used at more than 120 places, Landing Card component at more than 30 places',
            'Created a dynamic grouped grid with all base grid functionalities (all above mentioned functionalities) with basic div structure and custom CSS',
            'Created multiple Functional Dashboards (Ample use of CSS Flex box and position:sticky), Customizable Home screen, Customize Theme component, Recently Accessed Menus, Fullscreen Directive etc.',
            'Implemented our custom Chat component and Annotation Framework, Access Management Framework, Hint Tour, Customizable Keyboard Shortcuts, Trello line columns with draggable Cards etc which were picked up and used in other applications',
            'Implemented form level data and operation restriction using Access Control and View Sharing framework,',
            'Created helper wrapper components or components inline with PrimeNG components to provide missing features, ex ColorBox (Custom color code input), TreeView (pass custom template and control zoom and spacing), Swap List (swap items between lists, supports multi swapping), Quill Text Editor for Notes, Enjoyhint for Hint Tour, ng2-Pdfviewer for PDF viewer and E-mail component,',
            'Provided custom date and time formatting, apart from Localization, using Angular\'s localeService and custom pipes & directives, integrated ChartJS charts for analytics views,',
            'Created patterns for ease of development in future modules',
            'Created wrapper components around all PrimeNG components for ease of control and upgrading',
            'Tree Shaking, Lazy Loading and moving reused code to base classes'
        ]
    },
    {
        label: 'Past Projects (1): VISION (PSV)',
        icon: 'fa-solid fa-clock',
        expanded: false,
        description: 'Printing MIS Application for entry level customers',
        technology: ['Angular (7-10)', 'HTML', 'SCSS', 'PrimeNG', 'NG Material', 'Kendo Angular'],
        responsibilty: 'Provide wireframes, develop reusable components, responsible for maintaining style of application',
        detail: [
            'Learnt Angular from scratch for this project.',
            'Started contributing with providing wireframes, after creating new components.',
            'Later started creating reusbale components, like Popups, Number & Date format pipes, etc',
            'Took care of the styling of the whole application, as per the style guide, maintained proper SCSS structure, mixins etc',
            'Was responsible for doing R&D when any new requirement came that was not present in the patterns, ex implementing new component, implementing new features like filter in tree component etc',
            'Created few reusbale components, not present (either component or functionality we were looking for) in other UI Libraries at the time, created a NPM library out of same and hosted in npm <a target="_blank" href="https://www.npmjs.com/package/ez-ng-lib">(ez-ng-lib)</a>, Components such as Reorder List, Listbox, Round Progress, Progress bar, Custom Tabbar etc',
            'Helped team mates share load by taking charge of their development requirements.',
            'Helped in lazy loading modules, creating customizable Home screen, Custom Menu selection, etc'
        ]
    },
];

export default data;