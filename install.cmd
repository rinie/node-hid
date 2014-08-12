if not exist .\build\nul goto noclean
call node-gyp clean
:noclean
call node-gyp configure build install
