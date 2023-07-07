import type { Meta, StoryObj } from '@storybook/react';

import CrisisAlertOutlined from '../../lib/maps/CrisisAlertOutlined';

const meta: Meta<typeof CrisisAlertOutlined> = {
  component: CrisisAlertOutlined,
  tags: ['autodocs'],
  title: 'maps/CrisisAlertOutlined',
};

export default meta;
type Story = StoryObj<typeof CrisisAlertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
