import type { Meta, StoryObj } from '@storybook/react';

import HealthAndSafetyOutlined from '../../lib/social/HealthAndSafetyOutlined';

const meta: Meta<typeof HealthAndSafetyOutlined> = {
  component: HealthAndSafetyOutlined,
  tags: ['autodocs'],
  title: 'social/HealthAndSafetyOutlined',
};

export default meta;
type Story = StoryObj<typeof HealthAndSafetyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
