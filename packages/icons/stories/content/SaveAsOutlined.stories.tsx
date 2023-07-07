import type { Meta, StoryObj } from '@storybook/react';

import SaveAsOutlined from '../../lib/content/SaveAsOutlined';

const meta: Meta<typeof SaveAsOutlined> = {
  component: SaveAsOutlined,
  tags: ['autodocs'],
  title: 'content/SaveAsOutlined',
};

export default meta;
type Story = StoryObj<typeof SaveAsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
