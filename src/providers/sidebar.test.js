/* eslint-disable no-undef */
// Eslint disabled because 'test' already in scope
import assert from 'assert';
import SidebarProvider from './SidebarProvider';

test('Testing Sidebar state', async () => {
  const sidebar = new SidebarProvider();
  await sidebar.open();
  assert(sidebar.state.isOpen === true);

  await sidebar.close();
  assert(sidebar.state.isOpen === false);
});
