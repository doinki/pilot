import type { Meta, StoryObj } from '@storybook/react';

import DriveEtaOutlined from '../../lib/notification/DriveEtaOutlined';

const meta: Meta<typeof DriveEtaOutlined> = {
  component: DriveEtaOutlined,
  tags: ['autodocs'],
  title: 'notification/DriveEtaOutlined',
};

export default meta;
type Story = StoryObj<typeof DriveEtaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
