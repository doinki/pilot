import type { Meta, StoryObj } from '@storybook/react';

import LabelOutlined from '../../lib/action/LabelOutlined';

const meta: Meta<typeof LabelOutlined> = {
  component: LabelOutlined,
  tags: ['autodocs'],
  title: 'action/LabelOutlined',
};

export default meta;
type Story = StoryObj<typeof LabelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
