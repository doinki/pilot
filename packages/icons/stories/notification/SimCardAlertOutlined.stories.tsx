import type { Meta, StoryObj } from '@storybook/react';

import SimCardAlertOutlined from '../../lib/notification/SimCardAlertOutlined';

const meta: Meta<typeof SimCardAlertOutlined> = {
  component: SimCardAlertOutlined,
  tags: ['autodocs'],
  title: 'notification/SimCardAlertOutlined',
};

export default meta;
type Story = StoryObj<typeof SimCardAlertOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
