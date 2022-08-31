import React, { Component } from 'react';
import { Grid, Divider, Segment, Button, Icon, Header, Placeholder, List, Container, Table, Label, Menu, Search } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Cari document
                </Header>
                <Search placeholder='Search...' />
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name='file pdf outline' />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Grid columns={3} stackable>
          <Grid.Column width={5}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line length='very long' />
                  <Placeholder.Line length='very short' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='full' />
                  <Placeholder.Line length='long' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line length='full' />
                  <Placeholder.Line length='long' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='full' />
                  <Placeholder.Line length='long' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={2}>
            <List>
              <List.Item>
                <List.Header as='h4'>Website Terkait</List.Header>
              </List.Item>
              <List.Item icon='linkify' content={<a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>Google</a>} />
              <List.Item icon='linkify' content={<a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a>} />
              <List.Item icon='linkify' content={<a href='https://www.semantic-ui.com' target='_blank' rel='noopener noreferrer'>Semantic-UI</a>} />
              <List.Item icon='linkify' content={<a href='https://www.niomic.com' target='_blank' rel='noopener noreferrer'>Niomic</a>} />
              <List.Item icon='linkify' content={<a href='https://www.reactjs.org' target='_blank' rel='noopener noreferrer'>React</a>} />
            </List>
          </Grid.Column>
        </Grid>
        <br />
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'>
                  <Search placeholder='Search...' />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Name Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell positive>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'>
                  <Menu pagination>
                    <Menu.Item as='a' icon='chevron left' />
                    <Menu.Item as='a' name='1' />
                    <Menu.Item as='a' name='2' />
                    <Menu.Item as='a' name='3' />
                    <Menu.Item as='a' name='4' />
                    <Menu.Item as='a' icon='chevron right' />
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </div>
    )
  }
}

export default App;