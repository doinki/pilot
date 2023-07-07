import type { Meta, StoryObj } from '@storybook/react';

import GridOnOutlined from '../../lib/image/GridOnOutlined';

const meta: Meta<typeof GridOnOutlined> = {
  component: GridOnOutlined,
  tags: ['autodocs'],
  title: 'image/GridOnOutlined',
};

export default meta;
type Story = StoryObj<typeof GridOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
