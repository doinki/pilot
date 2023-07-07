import type { Meta, StoryObj } from '@storybook/react';

import DoneOutlined from '../../lib/action/DoneOutlined';

const meta: Meta<typeof DoneOutlined> = {
  component: DoneOutlined,
  tags: ['autodocs'],
  title: 'action/DoneOutlined',
};

export default meta;
type Story = StoryObj<typeof DoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
