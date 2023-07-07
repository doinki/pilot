import type { Meta, StoryObj } from '@storybook/react';

import SaveOutlined from '../../lib/content/SaveOutlined';

const meta: Meta<typeof SaveOutlined> = {
  component: SaveOutlined,
  tags: ['autodocs'],
  title: 'content/SaveOutlined',
};

export default meta;
type Story = StoryObj<typeof SaveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
