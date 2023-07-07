import type { Meta, StoryObj } from '@storybook/react';

import SaveAltOutlined from '../../lib/content/SaveAltOutlined';

const meta: Meta<typeof SaveAltOutlined> = {
  component: SaveAltOutlined,
  tags: ['autodocs'],
  title: 'content/SaveAltOutlined',
};

export default meta;
type Story = StoryObj<typeof SaveAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
