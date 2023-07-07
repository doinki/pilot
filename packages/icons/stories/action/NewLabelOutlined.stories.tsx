import type { Meta, StoryObj } from '@storybook/react';

import NewLabelOutlined from '../../lib/action/NewLabelOutlined';

const meta: Meta<typeof NewLabelOutlined> = {
  component: NewLabelOutlined,
  tags: ['autodocs'],
  title: 'action/NewLabelOutlined',
};

export default meta;
type Story = StoryObj<typeof NewLabelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
