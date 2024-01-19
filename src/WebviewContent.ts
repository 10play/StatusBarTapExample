export const source = `
<!DOCTYPE html>
<html>
<head>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-size: 100px;
        }
        #scroll {
            height: 100vh;
            overflow-y: auto;
        }
    </style>
</head>
<body>
    <div id="scroll">
        <p>This is the top</p>
        <div style="height: 150vh;"> 
            Scrollable content here
        </div>
        <p>This is the bottom</p>
    </div>
</body>
</html>
`;
