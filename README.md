NodeJS
------------------------------------------------------------------------------------

    is a javascript runtime alternative to a browser.

    this opened a large frontier of server-side programming using javascript.

    1. ES6 version of javascript
    2. NodeJS Modules

    Lab Setup
        NodeJS
        VS Code

    Javascript (ECMAScript 6)

        + is a scripting language that means no compilation needed.
        + is a dynamically typed language
            no variable declaration
            and the data type of the variables are infered as the variables are assigned a vlaue\
        + is case sensitive and mostly all its keywords are lower in case, all its objects and
            methods are also lower in case, Class names are initially capitalized.

    Javascript Projects on node

        npm init
        npm init -y

        package.json is the build config file.

        this package.json file is used by npm (the build tool) to store
        project meta data and a list dependencies neede for our project.

        npm install package-name --save
        npm install package-name --dev-save

        for install thrid party dependencies into a node project. --save makes
        the dependency a execution time dependency and --dev-save marks it as 
        development time dependency.

        all the thrid party dependency are hosued in node_modules folder.

    Javascript projects Modularization

        Each .js or .mjs file is a javascript module.

        we use 'export' and 'export defualt' to export resources from a module
        and 'import' to import them else where.

    Assignment

        in a node project we shall have

            emps.mjs

                1. create an array of employee objects.
                2. create and export a method to return the highest paid employee
                3. create and export a method to return the lowest paid employee
                4. create and export a method to return the senior most employee as per join date
                5. create and export a method to return the junior most employee as per join date

            index.js

                import those exported mehtods here and invoke them and log the results.