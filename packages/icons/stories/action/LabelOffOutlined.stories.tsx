import type { Meta, StoryObj } from '@storybook/react';

import LabelOffOutlined from '../../lib/action/LabelOffOutlined';

const meta: Meta<typeof LabelOffOutlined> = {
  component: LabelOffOutlined,
  tags: ['autodocs'],
  title: 'action/LabelOffOutlined',
};

export default meta;
type Story = StoryObj<typeof LabelOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
