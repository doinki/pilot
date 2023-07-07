import type { Meta, StoryObj } from '@storybook/react';

import StartOutlined from '../../lib/hardware/StartOutlined';

const meta: Meta<typeof StartOutlined> = {
  component: StartOutlined,
  tags: ['autodocs'],
  title: 'hardware/StartOutlined',
};

export default meta;
type Story = StoryObj<typeof StartOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
