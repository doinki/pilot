import type { Meta, StoryObj } from '@storybook/react';

import SevereColdOutlined from '../../lib/social/SevereColdOutlined';

const meta: Meta<typeof SevereColdOutlined> = {
  component: SevereColdOutlined,
  tags: ['autodocs'],
  title: 'social/SevereColdOutlined',
};

export default meta;
type Story = StoryObj<typeof SevereColdOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
