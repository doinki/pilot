import type { Meta, StoryObj } from '@storybook/react';

import RsvpOutlined from '../../lib/device/RsvpOutlined';

const meta: Meta<typeof RsvpOutlined> = {
  component: RsvpOutlined,
  tags: ['autodocs'],
  title: 'device/RsvpOutlined',
};

export default meta;
type Story = StoryObj<typeof RsvpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
