import type { Meta, StoryObj } from '@storybook/react';

import OpenInNewOffOutlined from '../../lib/action/OpenInNewOffOutlined';

const meta: Meta<typeof OpenInNewOffOutlined> = {
  component: OpenInNewOffOutlined,
  tags: ['autodocs'],
  title: 'action/OpenInNewOffOutlined',
};

export default meta;
type Story = StoryObj<typeof OpenInNewOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
