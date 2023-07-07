import type { Meta, StoryObj } from '@storybook/react';

import AccessibleForwardOutlined from '../../lib/action/AccessibleForwardOutlined';

const meta: Meta<typeof AccessibleForwardOutlined> = {
  component: AccessibleForwardOutlined,
  tags: ['autodocs'],
  title: 'action/AccessibleForwardOutlined',
};

export default meta;
type Story = StoryObj<typeof AccessibleForwardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
