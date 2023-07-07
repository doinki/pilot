import type { Meta, StoryObj } from '@storybook/react';

import SecurityUpdateOutlined from '../../lib/device/SecurityUpdateOutlined';

const meta: Meta<typeof SecurityUpdateOutlined> = {
  component: SecurityUpdateOutlined,
  tags: ['autodocs'],
  title: 'device/SecurityUpdateOutlined',
};

export default meta;
type Story = StoryObj<typeof SecurityUpdateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
