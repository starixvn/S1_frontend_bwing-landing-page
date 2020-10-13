rmdir build_all /s /q

For /L %%a in (1,1,3) DO (
    SET REACT_APP_STYLE=%%a&&react-scripts build&& xcopy /Y /E /I build build_all\style%%a
)

REM  set REACT_APP_STYLE=2 && react-scripts build && move build style2