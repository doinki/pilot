import type { Meta, StoryObj } from '@storybook/react';

import OutputOutlined from '../../lib/action/OutputOutlined';

const meta: Meta<typeof OutputOutlined> = {
  component: OutputOutlined,
  tags: ['autodocs'],
  title: 'action/OutputOutlined',
};

export default meta;
type Story = StoryObj<typeof OutputOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
