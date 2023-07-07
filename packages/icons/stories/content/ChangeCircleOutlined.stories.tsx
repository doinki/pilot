import type { Meta, StoryObj } from '@storybook/react';

import ChangeCircleOutlined from '../../lib/content/ChangeCircleOutlined';

const meta: Meta<typeof ChangeCircleOutlined> = {
  component: ChangeCircleOutlined,
  tags: ['autodocs'],
  title: 'content/ChangeCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof ChangeCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
