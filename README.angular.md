# Create home component
$ cd webapp/
$ ng generate component home --module=app.modules
# Create core module that is imported from app module
$ ng generate module core
# Create header component to be added to core module
$ ng generate component core/components/header --module=./core/core.module