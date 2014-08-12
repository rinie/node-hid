if not exist .\hidapi\nul goto clone
    cd hidapi
    git pull
    cd ..
goto end
:clone
    git clone https://github.com/signal11/hidapi.git
:end
