import type { Meta, StoryObj } from '@storybook/react';

import AnnouncementOutlined from '../../lib/action/AnnouncementOutlined';

const meta: Meta<typeof AnnouncementOutlined> = {
  component: AnnouncementOutlined,
  tags: ['autodocs'],
  title: 'action/AnnouncementOutlined',
};

export default meta;
type Story = StoryObj<typeof AnnouncementOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
