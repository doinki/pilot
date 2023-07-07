import type { Meta, StoryObj } from '@storybook/react';

import SavedSearchOutlined from '../../lib/action/SavedSearchOutlined';

const meta: Meta<typeof SavedSearchOutlined> = {
  component: SavedSearchOutlined,
  tags: ['autodocs'],
  title: 'action/SavedSearchOutlined',
};

export default meta;
type Story = StoryObj<typeof SavedSearchOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
