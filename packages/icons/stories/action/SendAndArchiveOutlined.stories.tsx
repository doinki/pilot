import type { Meta, StoryObj } from '@storybook/react';

import SendAndArchiveOutlined from '../../lib/action/SendAndArchiveOutlined';

const meta: Meta<typeof SendAndArchiveOutlined> = {
  component: SendAndArchiveOutlined,
  tags: ['autodocs'],
  title: 'action/SendAndArchiveOutlined',
};

export default meta;
type Story = StoryObj<typeof SendAndArchiveOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
