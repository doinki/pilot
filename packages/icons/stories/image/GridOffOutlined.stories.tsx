import type { Meta, StoryObj } from '@storybook/react';

import GridOffOutlined from '../../lib/image/GridOffOutlined';

const meta: Meta<typeof GridOffOutlined> = {
  component: GridOffOutlined,
  tags: ['autodocs'],
  title: 'image/GridOffOutlined',
};

export default meta;
type Story = StoryObj<typeof GridOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
