import type { Meta, StoryObj } from '@storybook/react';

import ViewSidebarOutlined from '../../lib/action/ViewSidebarOutlined';

const meta: Meta<typeof ViewSidebarOutlined> = {
  component: ViewSidebarOutlined,
  tags: ['autodocs'],
  title: 'action/ViewSidebarOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewSidebarOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
