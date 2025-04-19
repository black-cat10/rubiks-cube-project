body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f5f5f5;
}

#cube {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
  justify-content: center;
  margin-top: 50px;
}

.face {
  background-color: #ddd;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

