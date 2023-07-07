import type { Meta, StoryObj } from '@storybook/react';

import VerifiedUserOutlined from '../../lib/action/VerifiedUserOutlined';

const meta: Meta<typeof VerifiedUserOutlined> = {
  component: VerifiedUserOutlined,
  tags: ['autodocs'],
  title: 'action/VerifiedUserOutlined',
};

export default meta;
type Story = StoryObj<typeof VerifiedUserOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
