export const ButtonReset = `
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: none;
`;

export const ListReset = `
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  line-height: 1;
`;

export const LinkReset = `
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  color: black;
`;

export const TableReset = `
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  line-height: 1;

  th,
  tr,
  td {
    border: 0;
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    line-height: 1;
  }

  tr {
    th {
      vertical-align: top;
      width: 20%;
    }
  }


  ul {
    ${ListReset}
  }
`;