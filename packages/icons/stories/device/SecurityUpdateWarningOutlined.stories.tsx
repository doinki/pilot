import type { Meta, StoryObj } from '@storybook/react';

import SecurityUpdateWarningOutlined from '../../lib/device/SecurityUpdateWarningOutlined';

const meta: Meta<typeof SecurityUpdateWarningOutlined> = {
  component: SecurityUpdateWarningOutlined,
  tags: ['autodocs'],
  title: 'device/SecurityUpdateWarningOutlined',
};

export default meta;
type Story = StoryObj<typeof SecurityUpdateWarningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
