import type { Meta, StoryObj } from '@storybook/react';

import EscalatorWarningOutlined from '../../lib/places/EscalatorWarningOutlined';

const meta: Meta<typeof EscalatorWarningOutlined> = {
  component: EscalatorWarningOutlined,
  tags: ['autodocs'],
  title: 'places/EscalatorWarningOutlined',
};

export default meta;
type Story = StoryObj<typeof EscalatorWarningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
