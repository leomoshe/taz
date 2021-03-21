$ cd webapp/
# Create home component
$ ng generate component home --module=app.modules
# Create core module that is imported from app module
$ ng generate module core
# Create header component to be added to core module
$ ng generate component core/components/header --module=./core/core.module
# Create user/user-list component
$ ng generate component user/user-list
# Create user module that is imported from app module
$ ng generate module user
# Create user route that is imported from app route

