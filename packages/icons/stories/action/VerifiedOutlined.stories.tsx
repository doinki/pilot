import type { Meta, StoryObj } from '@storybook/react';

import VerifiedOutlined from '../../lib/action/VerifiedOutlined';

const meta: Meta<typeof VerifiedOutlined> = {
  component: VerifiedOutlined,
  tags: ['autodocs'],
  title: 'action/VerifiedOutlined',
};

export default meta;
type Story = StoryObj<typeof VerifiedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
