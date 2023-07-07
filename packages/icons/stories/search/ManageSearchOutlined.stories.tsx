import type { Meta, StoryObj } from '@storybook/react';

import ManageSearchOutlined from '../../lib/search/ManageSearchOutlined';

const meta: Meta<typeof ManageSearchOutlined> = {
  component: ManageSearchOutlined,
  tags: ['autodocs'],
  title: 'search/ManageSearchOutlined',
};

export default meta;
type Story = StoryObj<typeof ManageSearchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
