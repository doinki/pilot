import type { Meta, StoryObj } from '@storybook/react';

import InputOutlined from '../../lib/action/InputOutlined';

const meta: Meta<typeof InputOutlined> = {
  component: InputOutlined,
  tags: ['autodocs'],
  title: 'action/InputOutlined',
};

export default meta;
type Story = StoryObj<typeof InputOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
