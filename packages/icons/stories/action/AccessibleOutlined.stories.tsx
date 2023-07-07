import type { Meta, StoryObj } from '@storybook/react';

import AccessibleOutlined from '../../lib/action/AccessibleOutlined';

const meta: Meta<typeof AccessibleOutlined> = {
  component: AccessibleOutlined,
  tags: ['autodocs'],
  title: 'action/AccessibleOutlined',
};

export default meta;
type Story = StoryObj<typeof AccessibleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
