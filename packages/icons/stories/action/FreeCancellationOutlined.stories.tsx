import type { Meta, StoryObj } from '@storybook/react';

import FreeCancellationOutlined from '../../lib/action/FreeCancellationOutlined';

const meta: Meta<typeof FreeCancellationOutlined> = {
  component: FreeCancellationOutlined,
  tags: ['autodocs'],
  title: 'action/FreeCancellationOutlined',
};

export default meta;
type Story = StoryObj<typeof FreeCancellationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
