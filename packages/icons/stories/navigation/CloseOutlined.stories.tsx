import type { Meta, StoryObj } from '@storybook/react';

import CloseOutlined from '../../lib/navigation/CloseOutlined';

const meta: Meta<typeof CloseOutlined> = {
  component: CloseOutlined,
  tags: ['autodocs'],
  title: 'navigation/CloseOutlined',
};

export default meta;
type Story = StoryObj<typeof CloseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
