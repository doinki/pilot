import type { Meta, StoryObj } from '@storybook/react';

import MediationOutlined from '../../lib/action/MediationOutlined';

const meta: Meta<typeof MediationOutlined> = {
  component: MediationOutlined,
  tags: ['autodocs'],
  title: 'action/MediationOutlined',
};

export default meta;
type Story = StoryObj<typeof MediationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
