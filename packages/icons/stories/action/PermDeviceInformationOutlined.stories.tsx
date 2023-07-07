import type { Meta, StoryObj } from '@storybook/react';

import PermDeviceInformationOutlined from '../../lib/action/PermDeviceInformationOutlined';

const meta: Meta<typeof PermDeviceInformationOutlined> = {
  component: PermDeviceInformationOutlined,
  tags: ['autodocs'],
  title: 'action/PermDeviceInformationOutlined',
};

export default meta;
type Story = StoryObj<typeof PermDeviceInformationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
